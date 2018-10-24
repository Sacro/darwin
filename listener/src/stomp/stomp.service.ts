import { Injectable, Logger } from '@nestjs/common';
import { ConnectFailover } from 'stompit';
import { ConfigService } from '../app/config/config.service';
import { ConnectOptions } from 'stompit/lib/connect';
import { ConnectFailoverOptions } from 'stompit/lib/ConnectFailover';
import { createGunzip } from 'zlib';

@Injectable()
export class StompService {
  connectionManager: ConnectFailover;

  connectOptions: ConnectOptions = {
    host: this.config.stomp.host,
    port: this.config.stomp.port,
    connectHeaders: {
      login: this.config.stomp.login,
      passcode: this.config.stomp.passcode,
    },
  };

  connectFailoverOptions: ConnectFailoverOptions = {
    initialReconnectDelay: 10,
    maxReconnectDelay: 30000,
    useExponentialBackOff: true,
    maxReconnects: 30,
  };

  constructor(private readonly config: ConfigService) {
    this.connectionManager = new ConnectFailover(
      [this.connectOptions],
      this.connectFailoverOptions,
    );

    this.connectionManager.connect((error, client, reconnect) => {
      if (error) {
        Logger.error(error.message, error.stack, 'StompService');
        return;
      }

      client.on('error', error1 => {
        Logger.error(error1.message, error1.stack, 'StompService');
        reconnect();
      });

      const headers = {
        destination: this.config.stomp.destination,
      };

      client.subscribe(headers, (error2, message) => {
        if (error2) {
          Logger.error(error2.message, error2.stack, 'StompService');
        }

        const gunzip = createGunzip();
        const buffer = [];

        message.pipe(gunzip);

        gunzip
          .on('data', data => {
            // decompression chunk ready, add it to the buffer
            buffer.push(data.toString());
          })
          .on('end', () => {
            // response and decompression complete, join the buffer and return
            this.handleMessage(buffer.join(''));
          })
          .on('error', e => {
            Logger.error(e.message, e.stack);
          });
      });
    });
  }

  private async handleMessage(message: string) {
    Logger.log(`Message: ${message}`, 'StompService');
  }
}

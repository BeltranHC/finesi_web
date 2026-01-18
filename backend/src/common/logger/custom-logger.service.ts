import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CustomLogger implements LoggerService {
  private context?: string;

  setContext(context: string) {
    this.context = context;
  }

  private formatMessage(
    level: string,
    message: unknown,
    context?: string,
  ): string {
    const timestamp = new Date().toISOString();
    const ctx = context || this.context || 'Application';
    let msg: string;
    if (message === null || message === undefined) {
      msg = '';
    } else if (typeof message === 'string') {
      msg = message;
    } else if (typeof message === 'number' || typeof message === 'boolean') {
      msg = String(message);
    } else {
      msg = JSON.stringify(message);
    }
    return `[${timestamp}] [${level.toUpperCase().padEnd(7)}] [${ctx}] ${msg}`;
  }

  log(message: unknown, context?: string): void {
    console.log(this.formatMessage('log', message, context));
  }

  error(message: unknown, trace?: string, context?: string): void {
    console.error(this.formatMessage('error', message, context));
    if (trace) {
      console.error(trace);
    }
  }

  warn(message: unknown, context?: string): void {
    console.warn(this.formatMessage('warn', message, context));
  }

  debug(message: unknown, context?: string): void {
    if (process.env.NODE_ENV === 'development') {
      console.debug(this.formatMessage('debug', message, context));
    }
  }

  verbose(message: unknown, context?: string): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(this.formatMessage('verbose', message, context));
    }
  }

  fatal(message: unknown, context?: string): void {
    console.error(this.formatMessage('fatal', message, context));
  }
}

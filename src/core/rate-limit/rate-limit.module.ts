import { Module } from '@nestjs/common';
import { RateLimitService } from './rate-limit.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60,
          limit: 10,
        },
      ],
    }),
  ],
  providers: [RateLimitService],
  exports: [RateLimitService],
})
export class RateLimitModule {}

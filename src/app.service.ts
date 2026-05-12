import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityLog } from './log.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ActivityLog)
    private readonly logRepo: Repository<ActivityLog>,
  ) {}

  async createLog(action: string, payload: any) {
    const newLog = this.logRepo.create({
      action: action,
      details: payload,
    });
    
    console.log(`[DB Logging] Menyimpan log: ${action}`);
    return await this.logRepo.save(newLog);
  }
}
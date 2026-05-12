import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('profile_updated')
  async handleProfileUpdate(@Payload() data: any) {
    console.log('--- Pesan Diterima: Profile Update ---');
    await this.appService.createLog('PROFILE_UPDATED', data);
  }

  @MessagePattern('profile_created')
  async handleProfileCreate(@Payload() data: any) {
    console.log('--- Pesan Diterima: Profile Create ---');
    await this.appService.createLog('PROFILE_CREATED', data);
  }

  @MessagePattern('employee_deleted')
  async handleEmployeeDeleted(@Payload() data: any) {
    console.log('--- Pesan Diterima: Employee Deleted ---');
    await this.appService.createLog('EMPLOYEE_DELETED', data);
  }

  @MessagePattern('attendance_submitted')
  async handleAttendance(@Payload() data: any) {
    console.log('--- Pesan Diterima: Attendance Submitted ---');
    await this.appService.createLog('ATTENDANCE_SUBMITTED', data);
  }
}
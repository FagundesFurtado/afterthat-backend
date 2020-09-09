import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiConfigTestService {
    get apiConfig() {
        return {
            port: 3000,
            environment: 'test',
        };
    }
}

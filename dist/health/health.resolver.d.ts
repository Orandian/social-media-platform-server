import { HealthService } from "./health.service";
export declare class HealthResolver {
    private readonly healthService;
    constructor(healthService: HealthService);
    healthCheck(): {
        status: string;
        timestamp: string;
    };
}

import { Resolver, Query, ObjectType, Field } from "@nestjs/graphql";
import { HealthService } from "./health.service";

@ObjectType()
class HealthStatus {
  @Field()
  status: string;
  @Field()
  timestamp: string;
}

@Resolver()
export class HealthResolver {
  constructor(private readonly healthService: HealthService) {}

  @Query(() => HealthStatus)
  healthCheck() {
    return this.healthService.check();
  }
}

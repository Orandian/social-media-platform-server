export interface GqlContext {
  req: any;
  user?: any; // To be populated by GqlAuthGuard
}

import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => String)
  FetchTest() {
    return 'Ceci est test pour graphql';
  }
}

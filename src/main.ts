import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console
  });
  await app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`));
}
bootstrap();

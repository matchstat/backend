import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: '*',
  });

  const config = new DocumentBuilder()
    .setTitle('MatchStat Swagger')
    .setDescription('MatchStat API endpoints description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api2/swagger', app, document);

  await app.listen(3000);
}
bootstrap();

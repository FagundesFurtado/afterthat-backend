import { NestFactory, } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ApiConfigService } from './modules/api-config/api-config.service';


function bootstrapSwagger(app: INestApplication) {
  const options = new DocumentBuilder().setTitle('After That').setVersion('0.0.1').build()
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiConfigService = app.get(ApiConfigService);
  bootstrapSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(apiConfigService.apiConfig.port);
}
bootstrap();

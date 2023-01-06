import { Controller, Get } from "@nestjs/common";

@Controller('app')
export class AppController {
    @Get('/asdf')
    getRootRoute() { 
        return 'Hello Juh';
    }

    @Get('/bye')
        getByeThere() {
            return 'Bye Juh';
        }
}
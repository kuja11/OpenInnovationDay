import { Request } from "@sap/cds/apis/services";
import { Service }from "typedi";
import { SanitizedEntity } from "../../entities/BasicService";
import {
    AfterCreate, AfterDelete, AfterRead,
    AfterUpdate, BeforeCreate, BeforeDelete,
    BeforeRead, BeforeUpdate, Handler, Req
} from "cds-routing-handlers";

@Handler(SanitizedEntity.User)
@Service()
export default class UserHandler {

    @BeforeRead()
    public async BeforeRead(@Req() req: Request) {
        // Your before read logic
    }

    @AfterRead()
    public async AfterRead(@Req() req: Request) {
        // Your after read logic
    }

    @BeforeCreate()
    public async BeforeCreate(@Req() req: Request) {
        // Your before create logic
    }

    @AfterCreate()
    public async AfterCreate(@Req() req: Request) {
        // Your after create logic
    }

    @BeforeUpdate()
    public async BeforeUpdate(@Req() req: Request) {
        // Your before update logic
    }

    @AfterUpdate()
    public async AfterUpdate(@Req() req: Request) {
        // Your after update logic
    }

    @BeforeDelete()
    public async BeforeDelete(@Req() req: Request) {
        // Your before delete logic
    }

    @AfterDelete()
    public async AfterDelete(@Req() req: Request) {
        // Your after delete logic
    }

}

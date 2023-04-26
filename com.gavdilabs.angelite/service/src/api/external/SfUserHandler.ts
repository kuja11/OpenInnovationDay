import { Request } from "@sap/cds/apis/services";
import { Handler, OnCreate, OnDelete, OnRead, OnUpdate, Req } from "cds-routing-handlers";
import { Inject, Service } from "typedi";
import { SanitizedEntity } from "../../entities/BasicService";
import { SanitizedEntity as sf } from "../../entities/sf";
import SuccessFactors from "../../services/SuccessFactors";


@Handler(SanitizedEntity.SfUser)
@Service()
export default class SfUserHandler {

    @Inject('sf')
    private northwindService: SuccessFactors;

    @OnRead()
    public async OnRead(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Read(sf.User, req);
    }

    @OnCreate()
    public async OnCreate(@Req() req: Request): Promise<unknown> {
       return this.northwindService.Create(sf.User, req);
    }

    @OnUpdate()
    public async OnUpdate(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Update(sf.User, req);
    }

    @OnDelete()
    public async OnDelete(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Delete(sf.User, req);
    }

}

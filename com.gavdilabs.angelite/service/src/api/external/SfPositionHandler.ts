import { Request } from "@sap/cds/apis/services";
import { Handler, OnCreate, OnDelete, OnRead, OnUpdate, Req } from "cds-routing-handlers";
import { Inject, Service } from "typedi";
import { SanitizedEntity } from "../../entities/BasicService";
import { SanitizedEntity as sf } from "../../entities/sf";
import SuccessFactors from "../../services/SuccessFactors";


@Handler(SanitizedEntity.SfPosition)
@Service()
export default class SfPositionHandler {

    @Inject('sf')
    private northwindService: SuccessFactors;

    @OnRead()
    public async OnRead(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Read(sf.Position, req);
    }

    @OnCreate()
    public async OnCreate(@Req() req: Request): Promise<unknown> {
       return this.northwindService.Create(sf.Position, req);
    }

    @OnUpdate()
    public async OnUpdate(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Update(sf.Position, req);
    }

    @OnDelete()
    public async OnDelete(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Delete(sf.Position, req);
    }

}

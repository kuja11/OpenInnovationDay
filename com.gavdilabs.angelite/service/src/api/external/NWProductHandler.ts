/* import { Request } from "@sap/cds/apis/services";
import { Handler, OnCreate, OnDelete, OnRead, OnUpdate, Req } from "cds-routing-handlers";
import { Inject, Service } from "typedi";
import { SanitizedEntity } from "../../entities/BasicService";
import { SanitizedEntity as NWEntity } from "../../entities/northwind";
import Northwind from "../../services/Northwind";


@Handler(SanitizedEntity.NWProduct)
@Service()
export default class NWProductHandler {

    @Inject('northwind')
    private northwindService: Northwind;

    @OnRead()
    public async OnRead(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Read(NWEntity.Products, req);
    }

    @OnCreate()
    public async OnCreate(@Req() req: Request): Promise<unknown> {
       return this.northwindService.Create(NWEntity.Products, req);
    }

    @OnUpdate()
    public async OnUpdate(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Update(NWEntity.Products, req);
    }

    @OnDelete()
    public async OnDelete(@Req() req: Request): Promise<unknown> {
        return this.northwindService.Delete(NWEntity.Products, req);
    }

}
 */
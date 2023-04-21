import { Service } from "typedi";
import ODataService from "../core/services/ODataService";

// Northwind service connection class
// Used as example.
//
// Extends the core library's ODataService abstraction.
@Service({id: "northwind"})
export default class Northwind extends ODataService {

    constructor() {
        super("northwind");
    }

}


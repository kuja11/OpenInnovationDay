using {schema} from '../db/schema';
using { sf } from './external/sf';

service BasicService @(requires: 'authenticated-user') {

    // ======================= ENTITIES ============================

    entity User @(restrict: [
        {
            grant: ['READ'],
            to: ['USER']
        },
        {
            grant: ['READ', 'UPDATE', 'CREATE'],
            to: ['MANAGER']
        },
        {
            grant: ['*'],
            to: ['ADMIN']
        }
    ]) as projection on schema.User;

    // ==================== ACTION IMPORTS ==========================


    // =================== FUNCTION IMPORTS ==========================

    // ================== EXTERNAL SERVICES ==========================
    entity SfPosition @(restrict: [
        {
            grant: ['READ'],
            to: ['USER']
        },
        {
            grant: ['READ', 'UPDATE', 'CREATE'],
            to: ['MANAGER']
        },
        {
            grant: ['*'],
            to: ['ADMIN']
        }
    ]) as projection on sf.Position;

    entity SfUser @(restrict: [
        {
            grant: ['READ'],
            to: ['USER']
        },
        {
            grant: ['READ', 'UPDATE', 'CREATE'],
            to: ['MANAGER']
        },
        {
            grant: ['*'],
            to: ['ADMIN']
        }
    ]) as projection on sf.User;
}

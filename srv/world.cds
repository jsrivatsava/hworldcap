using {cap.pmdn.prd.Products as Products} from '../db/schema';

service ProductSvc
{
    entity ProductSvc as projection on Products;
}

service capsrv
{
    action eventinfo
    (
        eventtype : String(100),
        eventdata : String(100)
    )
    returns String;

    function hello
    (
        to : String
    )
    returns String;
}

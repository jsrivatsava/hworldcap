namespace cap.pmdn.prd;

/**
 * Table to store products
 */
entity Products
{
    key ID : UUID;
    Name : String(100) not null;
}

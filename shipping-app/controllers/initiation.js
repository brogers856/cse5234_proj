module.exports.initiate = (req,res) => {
    res.send('UPS is up and running to serve you')
}

module.exports.start_order = (req,res) => {
    let {organization, num_items, zip, order_id} = req.body;
    console.log("UPS\n===\n" + organization 
    + " requested shipping of " + num_items
    + " items to ZIP: " + zip 
    + ", Order Ref: " + order_id)
    let res_obj = {
        accepted: true,
        shipping_ref_num: 1005,
        organization: organization,
        order_id: order_id
    }
    res.send(res_obj)
}
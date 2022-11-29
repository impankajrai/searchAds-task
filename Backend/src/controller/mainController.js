
const Ads = require('../models/Ads')
const Companies = require('../models/Companies')

//search functionality--------------------------------------
module.exports.search=async (req, res) => {
    try {
        const keyword = req.query.keyword
        const re = new RegExp(keyword)
        const data = await Ads.aggregate([
            {
                $lookup: {
                    from: "companies",
                    localField: "companyId",
                    foreignField: "_id",
                    as: "Result"
                }
            },
            {
                $unwind: "$Result"
            },
            {
                $match: {
                    $or: [
                        { primaryText: { $regex: re, $options: 'i' } },
                        { headline: { $regex: re, $options: 'i' } },
                        { description: { $regex: re, $options: 'i' } },
                        { Result: { name: { $regex: re, $options: 'i' } } },
                    ]
                }
            }
        ])
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
}

//add ads----------------------------------------------------------------
module.exports.addAds=async (req, res) => {
  try {
      const ads = req.body
      const data = new Ads(ads)
      await data.save()
      res.send({ "message": "Data Inserted Successfully" })
  } catch (error) {
      res.status(400).send(error.message)
  }
}


//add company----------------------------------------------------------
module.exports.addCompany=async(req,res)=>{
  try {
    const company = req.body
    const data = new Companies(company)
    await data.save()
    res.send({ "message": "Data Inserted Successfully" })
} catch (error) {
    res.status(400).send(error.message)
}

}



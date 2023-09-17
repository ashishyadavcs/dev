export default async (req, res) => {
    res.setPreviewData({data:req.query});
    res.redirect("/preview?p=549&preview=true");
    res.end("Preview mode enabled");
 
};

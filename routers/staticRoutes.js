const express=require("express");
const {readData,readDataByID}=require("../controllers/read");

const router=express.Router();

router.get("/create",(req,res)=>{
    res.render("home");
});

router.get("/update/:id",(req,res)=>{
    res.render("update");
})

// router.get("/delete",(req,res)=>{
//     res.render("delete");
// })
router.get("/display",(req,res)=>{
    const n=req.query.nm;
    const a=req.query.ag;
    const m=req.query.mks;

    res.render("new",{
        data1:n,
        data2:a,
        data3:m,
    });
});

router.get("/getData",readData);

router.get("/login",(req,res)=>{
    res.render("login");
})

router.get("/signup", (req, res) => {
    res.render("signup");
  });
  
router.get("/config",(req,res)=>{
    res.render("main");
})

router.get("/getData/:id",readDataByID);
module.exports=router;
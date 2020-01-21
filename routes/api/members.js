const members = require('../../Members');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');

//get all
router.get('/',function(req,res){
    res.json(members);
})

//get by id 
router.get('/:id',function(req,res){
    let id = req.params.id;
    let memberJson = members.filter(member=> parseInt(member.id)==parseInt(id));
    
    if(memberJson.length == 0){
        res.status(400).send({error: 'no member found with id ' + id});
    }else{
        res.json(memberJson);  
    }     
})

//create member 
router.post('/',function(req,res){
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    
    if(!newMember.name || !newMember.email){
        res.status(400).send({error: 'missing name/email'});
    }else{
        members.push(newMember);
        res.json(members)
    }
})

//update member
router.update

module.exports = router;
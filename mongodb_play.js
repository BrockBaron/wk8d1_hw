use zoo;

//READ
const id = ObjectId('608741eb579471da3ef38f77');
db.animals.findOne({_id: id});

//UPDATE
db.animals.updateOne(
    { _id: ObjectId('608741eb579471da3ef38f77') },
    { $set: {name:"Pip"}}
);

//DELETE

db.animals.deleteOne(
    { _id: ObjectId('608741eb579471da3ef38f76')}
);
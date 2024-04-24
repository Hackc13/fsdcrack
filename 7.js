7.Aim:Create a CRUD application using data from the MongoDB server.
Follow Steps to perform CRUD operations.
1. Open mongodb compass
2. Go to compass settings and reset read only and enable mongosh terminal.
3. At bottom of mongodb compass “mongosh” appear and click on proceed with
following statements.
i) To display databases
>show dbs
Output:
admin 40.00 KiB
config 72.00 KiB
local 144.00 KiB
ii)To create a database
>use student
Or
> use ACS401
Output:
switched to db student
>show dbs
admin 40.00 KiB
config 72.00 KiB
local 144.00 KiB
iii)To open current database
>db
Student
iv)To create collection in database- student
>db.createCollection('btech')
{ ok: 1 }
>db.createCollection('mtech')
{ ok: 1 }
v)To display list of collections in database
>show collections

btech
mtech
vi)To insert one document in collection-btech
>db.btech.insertOne({'name':'vamsi','rollno':1})
{ acknowledged: true,
insertedId: ObjectId('65f85e3a902ad2ecb2d121af')
}
>db.btech.insertOne({'name':'sri','rollno':2,'phoneno':'123456'})
{ acknowledged: true,
insertedId: ObjectId('65f85e85902ad2ecb2d121b0')
}
>db.btech.find()
{ _id: ObjectId('65f85e3a902ad2ecb2d121af'),
name: 'vamsi',
rollno: 1
}
{ _id: ObjectId('65f85e85902ad2ecb2d121b0'),
name: 'sri',
rollno: 2,
phoneno: '123456'
}
>show dbs
admin 40.00 KiB
config 108.00 KiB
local 144.00 KiB

student 80.00 KiB
>db.btech.findOne({'rollno':1})
{ _id: ObjectId('65f85e3a902ad2ecb2d121af'),
name: 'vamsi',
rollno: 1
}
>db.btech.insertOne({'name':'sri','rollno':'3','phoneno':'123456'})
{ acknowledged: true,
insertedId: ObjectId('65f85fcf902ad2ecb2d121b1')
}
>db.btech.insertOne({'name':'sri',rollno:3,'phoneno':'123456'})
{ acknowledged: true,
insertedId: ObjectId('65f85fdf902ad2ecb2d121b2')
}
>db.btech.find({'name':'sri'})
{ _id: ObjectId('65f85e85902ad2ecb2d121b0'),
name: 'sri',
rollno: 2,
phoneno: '123456' }
{ _id: ObjectId('65f85fcf902ad2ecb2d121b1'),
name: 'sri',
rollno: '3',
phoneno: '123456'
}
{ _id: ObjectId('65f85fdf902ad2ecb2d121b2'),
name: 'sri',
rollno: 3,
phoneno: '123456'
}
>db.btech.updateOne({'rollno':'3'},{$set:{'name':'rafi'}})
{ acknowledged: true,
insertedId: null,
matchedCount: 1,
modifiedCount: 1,
upsertedCount: 0
}
>db.btech.find()
{ _id: ObjectId('65f85e3a902ad2ecb2d121af'),
name: 'vamsi',
rollno: 1
}
{ _id: ObjectId('65f85e85902ad2ecb2d121b0'),
name: 'sri',
rollno: 2,
phoneno: '123456'
}
{ _id: ObjectId('65f85fcf902ad2ecb2d121b1'),
name: 'rafi',
rollno: '3',
phoneno: '123456'

}
{ _id: ObjectId('65f85fdf902ad2ecb2d121b2'),
name: 'sri',
rollno: 3,
phoneno: '123456'
}
>db.btech.findOne({rollno:3})
{ _id: ObjectId('65f85fdf902ad2ecb2d121b2'),
name: 'sri',
rollno: 3,
phoneno: '123456'
}
>db.btech.deleteOne({'name':'sri'})
{ acknowledged: true,
deletedCount: 1
}
>db.logout()
{ ok: 1 }

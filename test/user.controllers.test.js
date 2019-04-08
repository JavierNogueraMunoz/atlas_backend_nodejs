const controller = require("../controllers/users.controller");
const service = require("../models/user.model");

test('getUserUid',()=>{
    const user = {
        dni: '1',
        email: '',
        name: '',
        newsletter:'Yes',
        captation: 'web',
        address: '',
        postal_code:'',
        city:'',
        region:'',
        country:'',
        observation:''
    };
    const req = {
        params:{
            uid: 'dni=75127876D'
        }
    };
    service.getUserUid = jest.fn(()=>user);
    const _user = controller.getUserUid(req);
    expect(service.getUserUid).toHaveBeenCalledWith(req.params.uid);
})
test('saveUser',()=>{
    const user = {
        dni: '1',
        email: '',
        name: '',
        newsletter:'Yes',
        captation: 'web',
        address: '',
        postal_code:'',
        city:'',
        region:'',
        country:'',
        observation:''
    };
    const req = {
        body:{
            dni: '1',
            email: '',
            name: '',
            newsletter:'Yes',
            captation: 'web',
            address: '',
            postal_code:'',
            city:'',
            region:'',
            country:'',
            observation:''
        }
    };
    service.saveUser = jest.fn(()=>user);
    const _user = controller.saveUser(req);
    expect(service.saveUser).toHaveBeenCalledWith(req.body);
})
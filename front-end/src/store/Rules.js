export default {
    USER: {
        USERNAME: [
            { required: true, message: '用户名不可为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 20, message: '支持的长度为6~20', trigger: 'blur' }
        ],
        PASSWORD: [
            { required: true, message: '密码不可为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 20, message: '密码长度为6~20', trigger: 'blur' }
        ]
    }
}

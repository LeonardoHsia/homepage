<template>
    <el-row>
        <el-col :span="6" :offset="16">
            <div>
                <h1>登录</h1>
                <el-form ref="login" :model="loginForm" id="loginForm">
                    <el-form-item>
                        <el-input v-model="loginForm.username" placeholder="ACCOUNT">
                            <template slot="prepend">
                                <i class="el-icon el-icon-user-solid"></i>    
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="loginForm.password" placeholder="PASSWORD">
                            <template slot="prepend">
                                <i class="el-icon el-icon-lock"></i>    
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" @click="onVisit">访客登录</el-button>
                        <el-button type="primary" @click="onLogIn">登录</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data () {
        return {
            loginForm: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        onVisit () {
            this.$message({
                message: "访客登录"
            })
        },
        onLogIn () {
            this.$message({
                message: "用户登录：当前功能未实现",
                type: "error"
            })
        },
        onCancel () {
            this.$message({
                message: "取消",
            })
        }
    }
}
</script>

<style scoped>

</style>
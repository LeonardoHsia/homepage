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
    }
}
</script>

<style scoped>

</style>
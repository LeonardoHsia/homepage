/* eslint-disable no-debugger */
<template>
    <el-row>
        <el-col :span='5' :offset='16'>
            <div>
                <h1 class='header'>登 录</h1>
                <el-form ref='login' :model='loginForm' id='loginForm' :rules='rules'>
                    <el-form-item :prop='BEANS.USER.USERNAME'>
                        <el-input v-model='loginForm[BEANS.USER.USERNAME]' placeholder='USERNAME'>
                            <template slot='prepend'>
                                <i class='el-icon el-icon-user-solid'></i>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item :prop='BEANS.USER.PASSWORD'>
                        <el-input type='password' v-model='loginForm[BEANS.USER.PASSWORD]' placeholder='PASSWORD'>
                            <template slot='prepend'>
                                <i class='el-icon el-icon-lock'></i>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row type='flex' :gutter='20'>
                            <el-col :span='8'>
                                <el-button type='info' :plain='true' @click='onVisit' style='width: 100%;'>访客登录</el-button>
                            </el-col>
                            <el-col :span='10'>
                                <el-button type='primary' :plain='true' @click='onLogIn' style='width: 100%;'>
                                    登 录
                                    <i class='el-icon-s-promotion' style='margin-left: 1rem;'></i>
                                </el-button>
                            </el-col>
                            <el-col :span='6'>
                                <el-button type='info' :plain='true' @click='onCancel' style='width: 100%;'>取消</el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import BEANS from '../../store/Beans'
import RULES from '../../store/Rules'
import Super from '../../components/Super'

const USER_BEAN = BEANS.USER
const USER_RULES = RULES.USER

export default {
    extends: Super,
    data () {
        return {
            loginForm: {
                [USER_BEAN.USERNAME]: '',
                [USER_BEAN.PASSWORD]: ''
            },
            rules: {
                [USER_BEAN.USERNAME]: USER_RULES.USERNAME,
                [USER_BEAN.PASSWORD]: USER_RULES.PASSWORD
            }
        }
    },
    mounted () {
        console.log(this.$refs.login.clearFields())
    },
    methods: {
        onVisit () {
            this.$message({
                message: '访客登录'
            })
        },
        onLogIn () {
            this.$message({
                message: '用户登录：当前功能未实现',
                type: 'error'
            })
            this.$router.push({
                path: 'index'
            })
        },
        onCancel () {
            this.$message({
                message: '取消'
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/less/common.less";

.header {
    color: @color;
}
</style>

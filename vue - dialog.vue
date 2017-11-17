<template>
    <div>
        <el-button @click="dialogFormVisible = true">{{title}}</el-button>
        <el-dialog :title="title" :visible.sync="dialogFormVisible">
            <el-form :model="commitForm" :rules="rules" ref="ruleForm">
                <!-- 评审select框 -->
                <el-form-item v-if="isApproval" label="规范性" :label-width="formLabelWidth" >
                    <el-select v-model="commitForm.status" placeholder="请审批" style="width:30%;" prop="select">
                        <el-option label="合理" value="1"></el-option>
                        <el-option label="不合理" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <!-- 公用评论模板 -->
                <el-form-item label="评论"  prop="content">
                    <i class="el-icon-info"></i>
                    <el-input type="textarea"
                              placeholder="编写评论"
                              :autosize="{ minRows: 4, maxRows: 8}"
                              v-model.trim="commitForm.content">
                    </el-input>
                </el-form-item>
                <el-form-item >
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" :loading="isLoading" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
            <el-dialog
                    width="30%"
                    title="操作结果"
                    :visible.sync="innerDialog.innerVisible"
                    append-to-body>
                <div style="text-align: center">
                    <p style="font-size: 24px;margin: 20px 0;">{{innerDialog.message}}</p>
                    <el-button type="success" size="medium" style="margin: 20px 0;" @click="closeDialog()">确定</el-button>
                </div>
            </el-dialog>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: ['type', 'url'],//  未传工单编号
        data() {
            return {
                // 反馈操作结果内置弹出层
                innerDialog: {
                    message: '',// 反馈信息
                    innerVisible: false, // 默认是关闭状态
                    buttonStutas: 'info'// 反馈按钮为灰色状态
                },
                dialogFormVisible: false,
                isLoading : false,
                formLabelWidth: '80px',
                title: '',
                commentForm: { // 评论form请求字段
                    id: '',
                    content: ''
                },
                approvalForm: { // 审批form请求字段
                    id: '',
                    status: '',
                    content: '',
                },
                isApproval: false, // type类型是否为审批
                commitForm: {}, // 最后提交的form
                rules: {
                    content: [
                        { required: true, message: '请填写评价', trigger: 'change' },
                        { min: 1, max: 300, message: '长度在300以内', trigger: 'blur' }
                    ],
                    select: [
                        { required: true, message: '请选择评审结果', trigger: 'change' }
                    ]
                }
            };
        },
        created: function() {
            switch(this.type) {
                case 'approval':
                    this.title = '审批';
                    this.isApproval = true;
                    this.commitForm = this.ApprovalForm;
                    // this.commitForm.id =
                    break;
                case 'comment':
                    this.title = '评论';
                    this.commitForm = this.commentForm;
                    break;
                default:
                    this.title = '请传type'
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.isLoading = true;
                        this.$http.post(this.url, this.commitForm).then((response) => {
                            this.isLoading = false;
                        if (response.data.data.code == '0') {
                            this.innerDialog.message = '操作成功'; // msg
                            this.innerDialog.buttonStutas = 'success';// 内置按钮变成功状态
                            this.innerDialog.innerVisible = true;
                        } else {
                            this.innerDialog.message = '操作失败'; //msg
                            this.innerDialog.innerVisible = true;
                        };
                    });
                    } else {
                        console.log('error submit!!');
                return false;
            }
            });
            },
            closeDialog() {
                this.innerDialog.innerVisible = false; //关闭内层
                this.dialogFormVisible = false; //关闭外层
            }
        }
    };
</script>
</script>

<style lang="less" rel="stylesheet/less">
.el-dialog__header {
    padding: 10px 20px;
.el-dialog__title {
        font-size: 20px !important;
    }
}
.el-dialog__body {
    padding: 0 20px;
.el-form {
        padding-top: 0;
    }
}
</style>

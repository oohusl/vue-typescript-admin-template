import { Form } from 'element-ui'
import { Component, Inject, Vue } from 'vue-property-decorator'
import { UserPaymentMethod } from './user-payment-method.model'

import UserPaymentMethodService from './user-payment-method.service'

@Component
export default class extends Vue {
  @Inject('UserPaymentMethodService')
  private userPaymentMethodService!: () => UserPaymentMethodService;

  private tableKey = 0;
  private list: UserPaymentMethod[] = [];
  private total = 0;
  private listLoading = true;
  private listQuery = {
    page: 1,
    limit: 20,
    importance: undefined,
    title: undefined,
    type: undefined,
    sort: '+id'
  };

  private textMap = {
    update: '编辑',
    create: '新增'
  }

  private tempItem?: UserPaymentMethod = {};
  private dialogStatus:string = 'create';
  private dialogFormVisible: boolean = false;

  private rules = {
    cardNo: [{ required: true, message: '必输', trigger: 'change' }]
  }

  created() {
    this.getList()
  }

  private handleFilter() {
    this.listQuery.page = 1
    this.getList()
  }

  private handleUpdate(row: any) {
    this.tempItem = Object.assign({}, row)
    this.dialogStatus = 'update'
    this.dialogFormVisible = true
    this.$nextTick(() => {
      (this.$refs['dataForm'] as Form).clearValidate()
    })
  }

  private handleCreate() {
    this.tempItem = {}
    this.dialogStatus = 'create'
    this.dialogFormVisible = true
    this.$nextTick(() => {
      (this.$refs['dataForm'] as Form).clearValidate()
    })
  }

  private async getList() {
    this.listLoading = true
    this.userPaymentMethodService()
      .retrieve()
      .then(data => {
        this.list = data
        this.total = data.length
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
      .catch(() => {
        this.listLoading = false
      })
  }

  private createData() {
    (this.$refs['dataForm'] as Form).validate(async(valid) => {
      if (valid) {
        // const { data } = await createArticle({ article: this.tempItem })
        // this.list.unshift(data.article)
        this.dialogFormVisible = false
        this.$notify({
          title: '成功',
          message: '创建成功',
          type: 'success',
          duration: 2000
        })
      }
    })
  }

  private updateData() {
    (this.$refs['dataForm'] as Form).validate(async(valid) => {
      if (valid) {
        const tempData = Object.assign({}, this.tempItem)
        // const { data } = await updateArticle(tempData.id, { article: tempData })
        /* for (const v of this.list) {
          if (v.id === data.article.id) {
            const index = this.list.indexOf(v)
            this.list.splice(index, 1, data.article)
            break
          }
        } */
        this.dialogFormVisible = false
        this.$notify({
          title: '成功',
          message: '更新成功',
          type: 'success',
          duration: 2000
        })
      }
    })
  }
}

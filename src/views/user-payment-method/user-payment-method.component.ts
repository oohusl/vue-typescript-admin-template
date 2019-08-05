import { mixins } from 'vue-class-component';
import { Component, Inject, Vue } from 'vue-property-decorator';
import { UserPaymentMethod } from './user-payment-method.model';

import UserPaymentMethodService from './user-payment-method.service';

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
  private importanceOptions = [1, 2, 3];
  private sortOptions = [
    { label: 'ID Ascending', key: '+id' },
    { label: 'ID Descending', key: '-id' }
  ];

  created() {
    this.getList();
  }
  private async getList() {
    this.listLoading = true;
    this.userPaymentMethodService()
      .retrieve()
      .then(data => {
        this.list = data;
        this.total = data.length;
        setTimeout(() => {
          this.listLoading = false;
        }, 0.5 * 1000);
      })
      .catch(() => {
        this.listLoading = false;
      });
  }
  private handleFilter() {
    this.listQuery.page = 1;
    this.getList();
  }
  private handleModifyStatus(row: any, status: string) {
    this.$message({
      message: '操作成功',
      type: 'success'
    });
    row.status = status;
  }
  private sortChange(data: any) {
    const { prop, order } = data;
  }

  private handleCreate() {}
}

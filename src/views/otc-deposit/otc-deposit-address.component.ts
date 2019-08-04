import { mixins } from 'vue-class-component';
import { Component, Inject, Vue } from 'vue-property-decorator';
import { OTCDepositAddress } from './otc-deposit-address.model';

import OTCDepositAddressService from './otc-deposit-address.service';

@Component
export default class extends Vue {
  @Inject('oTCDepositAddressService')
  private oTCDepositAddressService: () => OTCDepositAddressService;

  private tableKey = 0;
  private list: OTCDepositAddress[] = [];
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
    this.listLoading = false;
    const { data } = await this.oTCDepositAddressService().retrieve();
    this.list = data.items;
    this.total = data.total;
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false;
    }, 0.5 * 1000);
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

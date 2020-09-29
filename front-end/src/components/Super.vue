<script>

import BEANS from '../store/Beans'
import RULES from '../store/Rules'

export default {
    computed: {
        BEANS () {
            return BEANS
        },
        RULES () {
            return RULES
        }
    }
}
</script>

<style lang="less">
@import '../assets/less/common.less';

</style>

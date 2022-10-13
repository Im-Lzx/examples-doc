<template>
    <div>
        <label>请选择语言：</label>
        <div class="s-la-box">
            <div :class="['s-la-op',item.active?'active':'']" v-for="item in laArray" :key="item.key" @click="selectLa(item)">{{item.name}}</div>
        </div>

        <div class="result">
            <p>这是name：{{$la('name')}}</p>
            <p>这是hello：{{$la('hello',{name:'朋友'})}}</p>
        </div>
    </div>
</template>

<script>
import languageResource from "./languageResource";
export default {
    data() {
        return {
            languageResource: languageResource,
            currentLanguage: 'zh-cn',
            languageData: {},
            laArray: [
                { name: "中文 zh-cn", key: "zh-cn", active: 1 },
                { name: "英文 en-us", key: "en-us", active: 0 },
                { name: "中文繁体 zh-tw", key: "zh-tw", active: 0 },
            ]
        }
    },
    created() {
        this.languageData = languageResource[this.currentLanguage];
        this.$la('name');
    },
    methods: {
        selectLa(item) {
            let { active, key } = item;
            if (active) return;

            this.laArray.forEach(ele => {
                ele.active = ele.key == key;
            })
            this.currentLanguage = key;
            this.languageData = this.languageResource[key];
        },

        /**
         * @param {string} key 对应的多语言key值
         * @param {object} 对应的
         **/
        $la: function (key, replace) {
            // currentLanguage 多语言标识为空
            if (!this.currentLanguage) return '';

            // languageData 已设置多语言内容对象
            // languageData = this.languageResource[this.currentLanguage];
            if (!this.languageData) {
                return;
            }

            let val = this.languageData[key];

            // 当前语言标识下未匹配到值，做降级取中文处理，比如 
            // 语言标识为currentLanguage='zh-tw'，languageData={};
            // $la('name') 匹配 key='name'
            if (!val) {
                val = this.languageResource['zh-cn'][key] ?? this.languageResource['en-us'][key];
            }

            // 处理存在需要替换的子key
            if (replace && Object.keys(replace).length != 0) {
                for (let i in replace) {
                    const reg = new RegExp('\{' + i + '\}', 'i')
                    val = val.replace(reg, replace[i])
                }
            }

            return val;
        }
    }

}
</script>

<style scoped lang="scss">
.s-la-box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .s-la-op {
        padding: 5px 10px;
        border-radius: 3px;
    }

    .s-la-op.active {
        border: 1px solid #35eb9a;
        color: #35eb9a;
    }
}
.result{
    background: #353535;
    color: #fff;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
}
</style>
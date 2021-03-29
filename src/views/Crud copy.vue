<template>
    <div>
        <h1>CRUD CON VUE DESDE WP</h1>
        <ul>
            <li v-for="(item, index) in entradas" :key="index">
                {{item.id}}
                {{item.status}}
                {{item.title}}
                {{item.content}}
                {{item.date}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            entradas:[]
        }
    },
    created(){
        this.getEntradas();
    },
    methods:{
        // Para limpiar <p> del content
        limpiar(value){
        return value.replace(/<\/?[^>]+(>|$)/g, "")
        },
        async getEntradas(){
            try{

                const EntradasDB = await this.axios.get('/wp/v2/posts')

                console.log(EntradasDB.data)

                await EntradasDB.data.forEach(element => {
                    let item = {}

                item.id = element.id;
                item.title = element.title.rendered;
                item.content = this.limpiar(element.content.rendered);
                item.date = element.date;
                item.status = element.status;

                this.entradas.push(item);

                });

            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<template>
    <div>
        <div class="cabinet__body ">
            <div class="sales">
                <div class="sales__top">
                    <div class="sales__left">
                        <h1 class="sales__title">Покупки</h1>
                    </div>
                    <div class="sales__right">
                        <p class="sales__right-text">Сортировать по:</p>
                        <a href="#" class="sales__sort sales__sort--mob active">Цене</a>
                        <a href="#" class="sales__sort">Скидке</a>
                        <a href="#" class="sales__sort">Дате</a>
                    </div>
                </div>
                <div class="sales__cards cards">
                    <div class="card sales-card">
                        <div class="card-img">
                        <img src="@/assets/images/product.svg" alt="" />
                        <div class="card-sign card-sign--sales">Отличное</div>
                        <div class="card-actions card-actions--purchase">
                            <div class="card-actions-right">
                            <a href="#" class="card-actions-icon card-actions-icon--purchase">
                                Удалить
                            </a>
                            </div>
                        </div>
                        </div>
                        <p class="card-name">Мужская рубашка Mustang</p>
                        <div class="card-prices">
                        <div class="card-newprice">1500 руб</div>
                        <div class="card-oldprice">4500 руб</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Мобильный Личный Кабинет -> Покупки-->
        <div class="mob-purchase mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Покупки</a>
            </div>
            <div class="sales">
                <div class="sales__top">
                <div class="sales__left">
                </div>
                <div class="sales__right">
                    <p class="sales__right-text">Сортировать по:</p>
                    <a href="#" class="sales__sort sales__sort--mob active">Цене</a>
                    <a href="#" class="sales__sort">Скидке</a>
                    <a href="#" class="sales__sort">Дате</a>
                </div>
                </div>
                <div class="sales__cards cards">
                <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign card-sign--sales">Отличное</div>
                    <div class="card-actions card-actions--purchase">
                    <div class="card-actions-right">
                        <a href="#" class="card-actions-icon card-actions-icon--purchase">
                        Удалить
                        </a>
                    </div>
                    </div>
                    </div>
                    <p class="card-name">Мужская рубашка Mustang</p>
                    <div class="card-prices">
                    <div class="card-newprice">1500 руб</div>
                    <div class="card-oldprice">4500 руб</div>
                    </div>
                    </div>
                <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign card-sign--sales">Отличное</div>
                    <div class="card-actions card-actions--purchase active">
                    <div class="card-actions-right">
                    <a href="#" class="card-actions-icon card-actions-icon--purchase">
                        Удалить
                    </a>
                    </div>
                    </div>
                    </div>
                    <p class="card-name">Мужская рубашка Mustang</p>
                    <div class="card-prices">
                    <div class="card-newprice">1500 руб</div>
                    <div class="card-oldprice">4500 руб</div>
                    </div>
                </div>

                            <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign card-sign--sales">Отличное</div>
                    <div class="card-actions card-actions--purchase">
                    <div class="card-actions-right">
                        <a href="#" class="card-actions-icon card-actions-icon--purchase">
                        Удалить
                        </a>
                    </div>
                    </div>
                    </div>
                    <p class="card-name">Мужская рубашка Mustang</p>
                    <div class="card-prices">
                    <div class="card-newprice">1500 руб</div>
                    <div class="card-oldprice">4500 руб</div>
                    </div>
                    </div>
                    <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign card-sign--sales">Отличное</div>
                    <div class="card-actions card-actions--purchase">
                    <div class="card-actions-right">
                        <a href="#" class="card-actions-icon card-actions-icon--purchase">
                        Удалить
                        </a>
                    </div>
                    </div>
                    </div>
                    <p class="card-name">Мужская рубашка Mustang</p>
                    <div class="card-prices">
                    <div class="card-newprice">1500 руб</div>
                    <div class="card-oldprice">4500 руб</div>
                    </div>
                    </div>
                    <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign card-sign--sales">Отличное</div>
                    <div class="card-actions card-actions--purchase">
                    <div class="card-actions-right">
                        <a href="#" class="card-actions-icon card-actions-icon--purchase">
                        Удалить
                        </a>
                    </div>
                    </div>
                    </div>
                    <p class="card-name">Мужская рубашка Mustang</p>
                    <div class="card-prices">
                    <div class="card-newprice">1500 руб</div>
                    <div class="card-oldprice">4500 руб</div>
                    </div>
                    </div>
                    <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign card-sign--sales">Отличное</div>
                    <div class="card-actions card-actions--purchase">
                    <div class="card-actions-right">
                        <a href="#" class="card-actions-icon card-actions-icon--purchase">
                        Удалить
                        </a>
                    </div>
                    </div>
                    </div>
                    <p class="card-name">Мужская рубашка Mustang</p>
                    <div class="card-prices">
                    <div class="card-newprice">1500 руб</div>
                    <div class="card-oldprice">4500 руб</div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

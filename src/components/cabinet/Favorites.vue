<template>
        <!-- <div class="cabinet__body active">
            <div class="sales"> -->
<!--                <div class="sales__top">-->
<!--                    <div class="sales__left">-->
<!--                        <h1 class="sales__title">Избранное</h1>-->
<!--                    </div>-->
<!--                    <div class="sales__right">-->
<!--                        <p class="sales__right-text">Сортировать по:</p>-->
<!--                        <a href="#" class="sales__sort sales__sort&#45;&#45;mob active">Цене</a>-->
<!--                        <a href="#" class="sales__sort">Скидке</a>-->
<!--                        <a href="#" class="sales__sort">Дате</a>-->
<!--                    </div>-->
<!--                </div>-->
              <FavorPage/>
<!--                <div class="wish__cards cards">-->
<!--                    <div class="card sales-card">-->
<!--                    <div class="card-img">-->
<!--                        <img src="@/assets/images/product.svg" alt="" />-->
<!--                        <div class="card-sign">Отличное</div>-->
<!--                        <div class="card-actions">-->
<!--                        <a href="" class="card-actions-left">В корзину</a>-->
<!--                        <div class="card-actions-right">-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/eye.svg" alt="" />-->
<!--                            </a>-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/like.svg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <p class="card-name">Мужская рубашка Mustang</p>-->
<!--                    <div class="card-prices">-->
<!--                        <div class="card-newprice">1500 руб</div>-->
<!--                        <div class="card-oldprice">4500 руб</div>-->
<!--                    </div>-->
<!--                    </div>-->
<!--                    <div class="card sales-card">-->
<!--                    <div class="card-img">-->
<!--                        <img src="@/assets/images/product.svg" alt="" />-->
<!--                        <div class="card-sign">Неношеное</div>-->
<!--                        <div class="card-actions active">-->
<!--                        <a href="" class="card-actions-left">В корзину</a>-->
<!--                        <div class="card-actions-right">-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/eye.svg" alt="" />-->
<!--                            </a>-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/like.svg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <p class="card-name">Мужская рубашка Mustang</p>-->
<!--                    <div class="card-prices">-->
<!--                        <div class="card-newprice">1500 руб</div>-->
<!--                        <div class="card-oldprice">4500 руб</div>-->
<!--                    </div>-->
<!--                    </div>-->

<!--                    <div class="card sales-card">-->
<!--                    <div class="card-img">-->
<!--                        <img src="@/assets/images/product.svg" alt="" />-->
<!--                        <div class="card-sign">Неношеное</div>-->
<!--                        <div class="card-actions">-->
<!--                        <a href="" class="card-actions-left">В корзину</a>-->
<!--                        <div class="card-actions-right">-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/eye.svg" alt="" />-->
<!--                            </a>-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/like.svg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <p class="card-name">Мужская рубашка Mustang</p>-->
<!--                    <div class="card-prices">-->
<!--                        <div class="card-newprice">1500 руб</div>-->
<!--                        <div class="card-oldprice">4500 руб</div>-->
<!--                    </div>-->
<!--                    </div>-->

<!--                    <div class="card sales-card">-->
<!--                    <div class="card-img">-->
<!--                        <img src="@/assets/images/product.svg" alt="" />-->
<!--                        <div class="card-sign">Хорошее</div>-->
<!--                        <div class="card-actions">-->
<!--                        <a href="" class="card-actions-left">В корзину</a>-->
<!--                        <div class="card-actions-right">-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/eye.svg" alt="" />-->
<!--                            </a>-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                            <img src="@/assets/images/like.svg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <p class="card-name">Мужская рубашка Mustang</p>-->
<!--                    <div class="card-prices">-->
<!--                        <div class="card-newprice">1500 руб</div>-->
<!--                        <div class="card-oldprice">4500 руб</div>-->
<!--                    </div>-->
<!--                    </div>-->
<!--                    <div class="card sales-card">-->
<!--                        <div class="card-img">-->
<!--                        <img src="@/assets/images/product.svg" alt="" />-->
<!--                        <div class="card-sign">Хорошее</div>-->
<!--                        <div class="card-actions">-->
<!--                            <a href="" class="card-actions-left">В корзину</a>-->
<!--                            <div class="card-actions-right">-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                                <img src="@/assets/images/eye.svg" alt="" />-->
<!--                            </a>-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                                <img src="@/assets/images/like.svg" alt="" />-->
<!--                            </a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        </div>-->

<!--                        <p class="card-name">Мужская рубашка Mustang</p>-->
<!--                        <div class="card-prices">-->
<!--                        <div class="card-newprice">1500 руб</div>-->
<!--                        <div class="card-oldprice">4500 руб</div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="card sales-card">-->
<!--                        <div class="card-img">-->
<!--                        <img src="@/assets/images/product.svg" alt="" />-->
<!--                        <div class="card-sign">Хорошее</div>-->
<!--                        <div class="card-actions">-->
<!--                            <a href="" class="card-actions-left">В корзину</a>-->
<!--                            <div class="card-actions-right">-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                                <img src="@/assets/images/eye.svg" alt="" />-->
<!--                            </a>-->
<!--                            <a href="#" class="card-actions-icon">-->
<!--                                <img src="@/assets/images/like.svg" alt="" />-->
<!--                            </a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        </div>-->

<!--                        <p class="card-name">Мужская рубашка Mustang</p>-->
<!--                        <div class="card-prices">-->
<!--                        <div class="card-newprice">1500 руб</div>-->
<!--                        <div class="card-oldprice">4500 руб</div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <a href="#" class="wish__share">-->
<!--                    <p class="wish__share-text">Поделиться списком желаний</p>-->
<!--                    <img src="@/assets/images/share.svg" alt="">-->
<!--                </a>-->
            <!-- </div>
        </div> -->
        <!-- Мобильный Личный Кабинет -> Избранное-->
        <!-- <div class="mob-liked mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Список желаний</a>
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
                <div class="wish__cards cards">
                    <div class="card sales-card">
                        <div class="card-img">
                            <img src="@/assets/images/product.svg" alt="" />
                            <div class="card-sign">Хорошее</div>
                            <div class="card-actions">
                                <a href="" class="card-actions-left">В корзину</a>
                                <div class="card-actions-right">
                                    <a href="#" class="card-actions-icon">
                                        <img src="@/assets/images/eye.svg" alt="" />
                                    </a>
                                    <a href="#" class="card-actions-icon">
                                        <img src="@/assets/images/like.svg" alt="" />
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
                <a href="#" class="wish__share">
                <p class="wish__share-text">Поделиться списком желаний</p>
                <img src="@/assets/images/share.svg" alt="">
                </a>
            </div>
        </div> -->
</template>

<script>
import {useSessionStore} from '@/store/session';

import FavorPage from "@/views/Favorites";
import Card from "@/components/Card";

export default {
    
    components:{FavorPage, Card},
  computed:{
    sessionStore(){return useSessionStore()}
  }
}
</script>

<style>

</style>

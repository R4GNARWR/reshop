<template>
    <div>
        <div class="cabinet__body">
            <div class="subscribe">
                <h1 class="subscribe__title">Новые поступления товаров ваших размеров:</h1>
                <div class="subscribe__filter">
                    <div class="subscribe__filter-left">
                        <div class="subscribe__select">
                            <select name="category">
                                <option value="Сумки" class="subscribe__option">Категория</option>
                                <option value="Сумки" class="subscribe__option">Сумки</option>
                                <option value="Сумки" class="subscribe__option">Аксессуары</option>
                                <option value="Сумки" class="subscribe__option">Блузки</option>
                            </select>
                        </div>
                        <div class="subscribe__select">
                            <select name="brand" class="subscribe__select">
                                <option value="Сумки" class="subscribe__option">Бренд</option>
                                <option value="Сумки" class="subscribe__option">Сумки</option>
                                <option value="Сумки" class="subscribe__option">Аксессуары</option>
                                <option value="Сумки" class="subscribe__option">Блузки</option>
                            </select>
                        </div>
                        <div class="subscribe__filter-sizes">Размер одежды <a href="#"> <img src="@/assets/images/size-arrow.svg" alt=""></a></div>
                        <div class="subscribe__filter-sizes active">Размер обуви<a href="#"> <img src="@/assets/images/size-arrow.svg" alt=""></a></div>
                    </div>
                    <div class="subscribe__filter-right">
                        <div class="subscribe__filter-chooses">
                            <div class="subscribe__choosed">
                                <p class="subscribe__choosed-name">Сумки</p>
                                <a href="#" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></a>
                            </div>
                            <div class="subscribe__choosed">
                                <p class="subscribe__choosed-name">Аксессуары</p>
                                <a href="#" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></a>
                            </div>
                            <div class="subscribe__choosed">
                                <p class="subscribe__choosed-name">Блузки</p>
                                <a href="#" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></a>
                            </div>
                        </div>
                            <div class="subscribe__email-check">
                                <input class="subscribe__email-checkbox" type="checkbox" name="" id="notice">
                                <label for="notice">Отправлять уведомления на почту</label>
                            </div>
                    </div>
                </div>
                <div class="subscribe__cards cards">
                    <div class="card sales-card">
                    <div class="card-img">
                        <img src="@/assets/images/product.svg" alt="" />
                        <div class="card-sign">Отличное</div>
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
                    <div class="card sales-card">
                    <div class="card-img">
                        <img src="@/assets/images/product.svg" alt="" />
                        <div class="card-sign">Неношеное</div>
                        <div class="card-actions active">
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

                    <div class="card sales-card">
                    <div class="card-img">
                        <img src="@/assets/images/product.svg" alt="" />
                        <div class="card-sign">Неношеное</div>
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
                <div class="subscribe__email-check subscribe__email-check--mob">
                    <input class="subscribe__email-checkbox" type="checkbox" name="" id="notice">
                    <label for="notice">Отправлять уведомления на почту</label>
                </div>
            </div>
        </div>
        <!-- Мобильный Личный Кабинет -> Подписка на товары-->
        <div class="mob-subscribe mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Подписка на товары</a>
                </div>
                <div class="subscribe">
                <h1 class="subscribe__title">Новые поступления товаров ваших размеров:</h1>
                <div class="subscribe__filter">
                    <div class="subscribe__filter-left">
                    <div class="subscribe__select">
                        <select name="category">
                        <option value="Сумки" class="subscribe__option">Категория</option>
                        <option value="Сумки" class="subscribe__option">Сумки</option>
                        <option value="Сумки" class="subscribe__option">Аксессуары</option>
                        <option value="Сумки" class="subscribe__option">Блузки</option>
                        </select>
                    </div>
                    <div class="subscribe__select">
                        <select name="brand" class="subscribe__select">
                        <option value="Сумки" class="subscribe__option">Бренд</option>
                        <option value="Сумки" class="subscribe__option">Сумки</option>
                        <option value="Сумки" class="subscribe__option">Аксессуары</option>
                        <option value="Сумки" class="subscribe__option">Блузки</option>
                        </select>
                    </div>
                    <div class="subscribe__filter-sizes">Размер одежды <a href="#"> <img src="@/assets/images/size-arrow.svg" alt=""></a></div>
                    <div class="subscribe__filter-sizes active">Размер обуви<a href="#"> <img src="@/assets/images/size-arrow.svg" alt=""></a></div>
                    </div>
                    <div class="subscribe__filter-right">
                    <div class="subscribe__filter-chooses">
                        <div class="subscribe__choosed">
                        <p class="subscribe__choosed-name">Сумки</p>
                        <a href="#" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></a>
                        </div>
                        <div class="subscribe__choosed">
                        <p class="subscribe__choosed-name">Аксессуары</p>
                        <a href="#" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></a>
                        </div>
                        <div class="subscribe__choosed">
                        <p class="subscribe__choosed-name">Блузки</p>
                        <a href="#" class="subscrive__choosed-close"><img src="@/assets/images/close-cat.svg" alt=""></a>
                        </div>
                    </div>
                        <div class="subscribe__email-check">
                        <input class="subscribe__email-checkbox" type="checkbox" name="" id="notice">
                        <label for="notice">Отправлять уведомления на почту</label>
                        </div>
                    </div>
                </div>
                <div class="subscribe__cards cards">
                    <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign">Отличное</div>
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
                    <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign">Неношеное</div>
                    <div class="card-actions active">
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

                    <div class="card sales-card">
                    <div class="card-img">
                    <img src="@/assets/images/product.svg" alt="" />
                    <div class="card-sign">Неношеное</div>
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
                    <div class="subscribe__email-check subscribe__email-check--mob">
                    <input class="subscribe__email-checkbox" type="checkbox" name="" id="notice">
                    <label for="notice">Отправлять уведомления на почту</label>
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

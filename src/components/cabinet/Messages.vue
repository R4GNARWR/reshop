<template>
    <div>
        <div class="cabinet__body">
            <div class="messages">
                <h1 class="messages__title">Сообщения</h1>
                <ul class="messages__list">
                    <li class="messages__item">
                        <div class="messages__item-info">Вам одобрена скидка на товар <a href="#" class="messages__item-link">“Рубашка”</a>. Итоговая цена - 500 рублей. <a href="" class="messages__item-link">Купить товар</a></div>
                        <time class="messages__item-date">03.09.2022</time>
                    </li>
                    <li class="messages__item">
                        <div class="messages__item-info">Вы запросили скидку на товар <a href="#" class="messages__item-link">“Рубашка”</a>. Ожидайте ответа продавца</div>
                        <time class="messages__item-date">03.09.2022</time>
                    </li>
                    <li class="messages__item">
                        <div class="messages__item-info">Покупатель запросил скидку на товар “1”
                            <div class="messages__choose">
                                <p class="messages__choose-text">Выберите:</p>
                                <div class="messages__choose-blocks">
                                    <div class="messages__choose-block">100р</div>
                                    <div class="messages__choose-block">10%</div>
                                    <div class="messages__choose-block">Цена чашки кофе - 230р</div>
                                    <div class="messages__choose-block active">Отклонить скидку</div>
                                </div>
                            </div>
                        </div>
                        <time class="messages__item-date">03.09.2022</time>
                    </li>
                    <li class="messages__item">
                        <div class="messages__item-info">Скидка на товар “1” отклонена</div>
                        <time class="messages__item-date">03.09.2022</time>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Мобильный Личный Кабинет -> Сообщения-->
        <div class="mob-messages mob-cabinet__body "> 
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Сообщения</a>
            </div>
            <div class="messages">
                <ul class="messages__list">
                <li class="messages__item">
                    <div class="messages__item-info">Вам одобрена скидка на товар <a href="#" class="messages__item-link">“Рубашка”</a>. Итоговая цена - 500 рублей. <a href="" class="messages__item-link">Купить товар</a></div>
                    <time class="messages__item-date">03.09.2022</time>
                </li>
                <li class="messages__item">
                    <div class="messages__item-info">Вы запросили скидку на товар <a href="#" class="messages__item-link">“Рубашка”</a>. Ожидайте ответа продавца</div>
                    <time class="messages__item-date">03.09.2022</time>
                </li>
                <li class="messages__item">
                    <div class="messages__item-info">Покупатель запросил скидку на товар “1”
                    <div class="messages__choose">
                        <p class="messages__choose-text">Выберите:</p>
                        <div class="messages__choose-blocks">
                        <div class="messages__choose-block">100р</div>
                        <div class="messages__choose-block">10%</div>
                        <div class="messages__choose-block">Цена чашки кофе - 230р</div>
                        <div class="messages__choose-block active">Отклонить скидку</div>
                        </div>
                    </div>
                    </div>
                    <time class="messages__item-date">03.09.2022</time>
                </li>
                <li class="messages__item">
                    <div class="messages__item-info">Скидка на товар “1” отклонена</div>
                    <time class="messages__item-date">03.09.2022</time>
                </li>
                </ul>
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
<template>
  <section class="category">
    <div class="container">
      <div class="category__top">
        <div class="category__top-left">
          <div class="breadcrumb">
            <a href="#">Главная</a>
            <a href="#">Категория</a>
          </div>
          <h1 class="category__title">
            {{ title }}
            <span class="category__title-amount" v-if="products.length">{{products.length}} штук</span>
            <span class="category__title-amount" v-else>Пока таких товаров нет</span>
          </h1>
        </div>
        <p class="category__slogan">
          Все вещи тщательно отбираются и проходят термическую обработку.
          Однако, они не являются новыми и могут иметь незначительные
          дефекты
        </p>
<!--        {{filterData}}-->
      </div>
      <div class="category__container">
        <aside class="filter">
          <form class="filter__form">
            <div class="filter__form-field">
              <div class="filter__form-top">
                <div class="filter__form-title"><p>Цена, &#8381;</p></div><a class="filter__form-collapse">
                <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                      fill="#959595"
                  />
                </svg>
              </a>
              </div>
              <div class="filter__form-range">
                <label>
                  <span>От</span>
                  <input
                      class="filter__form-range--first"
                      type="text"
                      placeholder="5460"
                      v-model="minPrice"
                      @change="filteringProduct"
                  />
                </label>
                <label>
                  <span>До</span>
                  <input type="text" placeholder="9000"
                         v-model="maxPrice"
                         @change="filteringProduct"
                  />
                </label>
              </div>
            </div>
<!--            <div class="filter__form-field">-->
<!--              <div class="filter__form-top">-->
<!--                <div class="filter__form-title">-->
<!--                  <p>Бренд</p>-->
<!--                  <a href="#" class="filter__form-reset filter__form-link">Сбросить</a>-->
<!--                </div>-->
<!--                <a class="filter__form-collapse">-->
<!--                  <svg-->
<!--                      width="16"-->
<!--                      height="15"-->
<!--                      viewBox="0 0 16 15"-->
<!--                      fill="none"-->
<!--                      xmlns="http://www.w3.org/2000/svg"-->
<!--                  >-->
<!--                    <path-->
<!--                        d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"-->
<!--                        fill="#959595"-->
<!--                    />-->
<!--                  </svg>-->
<!--                </a>-->
<!--              </div>-->
<!--              <input-->
<!--                  type="search"-->
<!--                  class="filter__form-search"-->
<!--                  placeholder="Поиск..."-->
<!--              />-->
<!--              <fieldset class="filter__form-fieldset">-->
<!--                <div class="filter__form-check">-->
<!--                  <input-->

<!--                      type="checkbox"-->
<!--                      class="filter__form-checkbox"-->
<!--                  />-->
<!--                  <label >Marc Jacobs</label>-->
<!--                </div>-->
<!--                <div class="filter__form-check">-->
<!--                  <input-->
<!--                      type="checkbox"-->
<!--                      class="filter__form-checkbox"-->
<!--                  />-->
<!--                  <label >Valentino</label>-->
<!--                </div>-->
<!--                <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Guess</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Dior</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Furia</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Dolce & Gabanna</label>-->
<!--                    </div>-->
<!--                  </fieldset>-->
<!--                  <a class="filter__form-link filter__form-link&#45;&#45;desc"-->
<!--                    >Очистить фильтр</a-->
<!--                  >-->
<!--                </div>-->
<!--                <div class="filter__form-field">-->
<!--                  <div class="filter__form-top">-->
<!--                    <div class="filter__form-title">-->
<!--                      <p>Размер</p>-->
<!--                      <a href="#" class="filter__form-reset filter__form-link"-->
<!--                        >Сбросить</a-->
<!--                      >-->
<!--                    </div>-->
<!--                    <a class="filter__form-collapse">-->
<!--                      <svg-->
<!--                        width="16"-->
<!--                        height="15"-->
<!--                        viewBox="0 0 16 15"-->
<!--                        fill="none"-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                      >-->
<!--                        <path-->
<!--                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"-->
<!--                          fill="#959595"-->
<!--                        />-->
<!--                      </svg>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <input-->
<!--                    type="search"-->
<!--                    class="filter__form-search"-->
<!--                    placeholder="Поиск..."-->
<!--                  />-->
<!--                  <fieldset class="filter__form-fieldset">-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >40 (Don’t know)</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >42 (XXS)</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >44 (XS)</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >46 (S)</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >48 (M)</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >50 (L)</label>-->
<!--                    </div>-->
<!--                  </fieldset>-->
<!--                  <a class="filter__form-link filter__form-link&#45;&#45;desc"-->
<!--                    >Очистить фильтр</a-->
<!--                  >-->
<!--                </div>-->
<!--                <div class="filter__form-field">-->
<!--                  <div class="filter__form-top">-->
<!--                    <div class="filter__form-title">-->
<!--                      <p>Сезон</p>-->
<!--                      <a href="#" class="filter__form-reset filter__form-link"-->
<!--                        >Сбросить</a-->
<!--                      >-->
<!--                    </div>-->
<!--                    <a class="filter__form-collapse">-->
<!--                      <svg-->
<!--                        width="16"-->
<!--                        height="15"-->
<!--                        viewBox="0 0 16 15"-->
<!--                        fill="none"-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                      >-->
<!--                        <path-->
<!--                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"-->
<!--                          fill="#959595"-->
<!--                        />-->
<!--                      </svg>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <input-->
<!--                    type="search"-->
<!--                    class="filter__form-search"-->
<!--                    placeholder="Поиск..."-->
<!--                  />-->
<!--                  <fieldset class="filter__form-fieldset">-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Лето</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Осень</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Зима</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Весна</label>-->
<!--                    </div>-->
<!--                  </fieldset>-->
<!--                </div>-->
<!--                <div class="filter__form-field">-->
<!--                  <div class="filter__form-top">-->
<!--                    <div class="filter__form-title">-->
<!--                      <p>Состояние</p>-->
<!--                      <a href="#" class="filter__form-reset filter__form-link"-->
<!--                        >Сбросить</a-->
<!--                      >-->
<!--                    </div>-->
<!--                    <a class="filter__form-collapse">-->
<!--                      <svg-->
<!--                        width="16"-->
<!--                        height="15"-->
<!--                        viewBox="0 0 16 15"-->
<!--                        fill="none"-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                      >-->
<!--                        <path-->
<!--                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"-->
<!--                          fill="#959595"-->
<!--                        />-->
<!--                      </svg>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <fieldset class="filter__form-fieldset">-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Хорошее</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Отличное</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Отличное</label>-->
<!--                    </div>-->
<!--                  </fieldset>-->
<!--                </div>-->
<!--                <div class="filter__form-field">-->
<!--                  <div class="filter__form-top">-->
<!--                    <div class="filter__form-title">-->
<!--                      <p>Размер</p>-->
<!--                      <a href="#" class="filter__form-reset filter__form-link"-->
<!--                        >Сбросить</a-->
<!--                      >-->
<!--                    </div>-->
<!--                    <a class="filter__form-collapse">-->
<!--                      <svg-->
<!--                        width="16"-->
<!--                        height="15"-->
<!--                        viewBox="0 0 16 15"-->
<!--                        fill="none"-->
<!--                        xmlns="http://www.w3.org/2000/svg"-->
<!--                      >-->
<!--                        <path-->
<!--                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"-->
<!--                          fill="#959595"-->
<!--                        />-->
<!--                      </svg>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <input-->
<!--                    type="search"-->
<!--                    class="filter__form-search"-->
<!--                    placeholder="Поиск..."-->
<!--                  />-->
<!--                  <fieldset class="filter__form-fieldset">-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Хлопок</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Лён</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Шелк</label>-->
<!--                    </div>-->
<!--                    <div class="filter__form-check">-->
<!--                      <input-->

<!--                        type="checkbox"-->
<!--                        class="filter__form-checkbox"-->
<!--                      />-->
<!--                      <label >Кашемир</label>-->
<!--                    </div>-->
<!--                  </fieldset>-->
<!--                </div>-->
                <div class="filter__form-field">
                  <div class="filter__form-top">
                    <div class="filter__form-title">
                      <p>Цвет</p>
                    </div>
                    <a class="filter__form-collapse">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z"
                          fill="#959595"
                        />
                      </svg>
                    </a>
                  </div>
                  <fieldset class="filter__form-colorset">
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox yellow"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox red"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox black"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox white"
                      />
                      <label></label>
                    </div>
                    <div class="filter__form-color">
                      <input
                        type="checkbox"
                        class="filter__form-color-checkbox blue"
                      />
                      <label></label>
                    </div>
                  </fieldset>
                  <a class="filter__form-link">Очистить фильтр</a>
                </div>
<!--                <button class="filter__form-btn btn">-->
<!--                  Показать 65 товаров-->
<!--                </button>-->
              </form>
            </aside>
            <div class="category__products">
              <div class="category__sort">
                <p class="category__sort-text">Сортировать по:</p>
                <a class="category__sort-link">Цене</a>
                <a class="category__sort-link">Скидке</a>
                <a class="category__sort-link">Дате</a>
              </div>
              <div class="mob__sort">
                <div class="mob__sort-filter">
                  <p>Фильтры</p>
                  <img src="@/assets/images/fillter.svg" alt="" />
                </div>
                <a class="category__sort-link--mob">Цене</a>
              </div>
              <div class="category__selected" v-if="filters.length">
                <a class="category__selected-item"
                  ><span>черный</span
                  ><img src="@/assets/images/white-close.svg" alt=""
                /></a>
                <a class="category__selected-item"
                  ><span>46 (S)</span
                  ><img src="@/assets/images/white-close.svg" alt=""
                /></a>
                <a class="category__selected-item"
                  ><span>Guess</span
                  ><img src="@/assets/images/white-close.svg" alt=""
                /></a>
                <a class="category__selected-item"
                  ><span>черный</span
                  ><img src="@/assets/images/white-close.svg" alt=""
                /></a>
                <a class="category__selected-item"
                  ><span>46 (S)</span
                  ><img src="@/assets/images/white-close.svg" alt=""
                /></a>
                <a class="category__selected-item"
                  ><span>Guess</span
                  ><img src="@/assets/images/white-close.svg" alt=""
                /></a>
              </div>
              <p class="category__products-text" v-if="beforeProducts">{{beforeProducts}}</p>
              <div class="category__products-cards cards">
                  <Card class="card category-card"
                        v-for="p of products" :key="p.id" :card-data="p.id"
                        @childData="handleChildData" />
              </div>
              <p class="category__products-text" v-if="afterProducts">{{afterProducts}}
              </p>
            </div>
          </div>
        </div>
      </section>
  <!-- Карточка товара -->
  <div class="minicard">
    <div class="minicard__window">
      <div class="minicard__images">
        <div class="minicard__top-slider">
          <div class="minicard__top-wrapper">
            <div class="minicard__top-img active">
              <img src="@/assets/images/slide-img.svg" alt="" />
            </div>
            <div class="minicard__top-img">
              <img src="@/assets/images/slide-img.svg" alt="" />
            </div>
            <div class="minicard__top-img">
              <img src="@/assets/images/slide-img.svg" alt="" />
            </div>
            <div class="minicard__top-img">
              <img src="@/assets/images/slide-img.svg" alt="" />
            </div>
            <div class="minicard__top-img">
              <img src="@/assets/images/slide-img.svg" alt="" />
            </div>
            <div class="minicard__top-img">
              <img src="@/assets/images/slide-img.svg" alt="" />
            </div>
            <div class="minicard__top-img">
              <img src="@/assets/images/slide-img.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="minicard__bottom-slider">
          <div class="minicard__bottom-wrapper">
            <div class="minicard__bottom-img">
              <img src="" alt="" />
            </div>
            <div class="minicard__bottom-img">
              <img src="" alt="" />
            </div>
            <div class="minicard__bottom-img">
              <img src="" alt="" />
            </div>
            <div class="minicard__bottom-img">
              <img src="" alt="" />
            </div>
            <div class="minicard__bottom-img">
              <img src="@/assets/images/play.svg" alt="" />
            </div>
            <div class="minicard__bottom-img">
              <img src="" alt="" />
            </div>
            <div class="minicard__bottom-img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="minicard__info">
        <div class="minicard__info-viewers">
          Этот товар сейчас смотрят: 14 человек
        </div>
        <h1 class="minicard__info-title">Свитер Forever21</h1>
        <div class="minicard__info-light">Forever21</div>
        <div class="minicard__info-light">Артикул: Р7142</div>
        <div class="minicard__sizes">
          <div class="minicard__sizes-text">Размер:</div>
          <div class="minicard__sizes-items">
            <div class="minicard__sizes-item">S</div>
          </div>
        </div>
        <p class="minicard__info-text">Материал: 100% акрил.</p>
        <p class="minicard__info-text">
          Свитер светло-кофейного цвета, с V-образным вырезом и крупной
          вязкой. Свободного кроя.
        </p>
        <div class="minicard__actions">
          <div class="minicard__prices">
            <div class="minicard__newprice">1400 р.</div>
            <div class="minicard__oldprice">1800 р.</div>
          </div>
          <a href="#" class="minicard__actions-like">
            <img src="@/assets/images/like.svg" alt="" />
          </a>
          <a href="#" class="minicard__actions-whatsapp">
            <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M35.28 18C35.28 27.5435 27.5435 35.28 18 35.28C8.45652 35.28 0.72 27.5435 0.72 18C0.72 8.45652 8.45652 0.72 18 0.72C27.5435 0.72 35.28 8.45652 35.28 18Z"
                  stroke="#010101"
                  stroke-width="1.44"
              />
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.043 27.7326C16.3268 27.7326 14.7144 27.2939 13.3116 26.5241L7.89258 28.2461L9.65912 23.0351C8.7681 21.5713 8.25479 19.8549 8.25479 18.0201C8.25479 12.656 12.637 8.30762 18.0432 8.30762C23.4488 8.30762 27.831 12.656 27.831 18.0201C27.831 23.3842 23.449 27.7326 18.043 27.7326ZM18.043 9.8544C13.505 9.8544 9.81376 13.5175 9.81376 18.0201C9.81376 19.8068 10.3962 21.4615 11.3811 22.8078L10.3532 25.8402L13.5154 24.8351C14.815 25.6882 16.3715 26.1858 18.043 26.1858C22.5803 26.1858 26.2723 22.5229 26.2723 18.0203C26.2723 13.5178 22.5803 9.8544 18.043 9.8544ZM22.9855 20.257C22.9253 20.1579 22.7653 20.0981 22.5258 19.9792C22.2857 19.8602 21.1058 19.284 20.8862 19.2049C20.666 19.1256 20.5058 19.0855 20.3461 19.3238C20.1864 19.5622 19.7265 20.0981 19.5862 20.257C19.4462 20.416 19.3064 20.436 19.0665 20.3168C18.8268 20.1978 18.0536 19.9464 17.1369 19.1353C16.4238 18.5044 15.9422 17.7254 15.8024 17.4868C15.6624 17.2487 15.7875 17.12 15.9076 17.0015C16.0155 16.8947 16.1475 16.7234 16.2676 16.5845C16.3877 16.4454 16.4276 16.3464 16.5073 16.1873C16.5875 16.0285 16.5474 15.8896 16.4874 15.7701C16.4273 15.6512 15.9473 14.4797 15.7474 14.0029C15.5476 13.5266 15.348 13.6059 15.2078 13.6059C15.0678 13.6059 14.9078 13.586 14.7479 13.586C14.5879 13.586 14.3278 13.6456 14.1078 13.8837C13.8881 14.1221 13.2684 14.6981 13.2684 15.8694C13.2684 17.0409 14.1278 18.1727 14.2481 18.3313C14.3679 18.49 15.9074 20.9721 18.3463 21.9254C20.7861 22.8784 20.7861 22.5605 21.2261 22.5209C21.6654 22.4812 22.645 21.9451 22.8455 21.3892C23.0451 20.833 23.0451 20.3562 22.9855 20.257Z"
                  fill="black"
              />
            </svg>
            <p>Задать вопрос в Whats’app</p>
          </a>
        </div>
        <div class="minicard__info-buttons">
          <a href="#" class="minicard__info-btn">В корзину</a>
          <a href="#" class="minicard__info-btn light">Купить сейчас</a>
        </div>
        <p class="minicard__info-light">
          *Согласно правилам комиссионного магазина одежда, обувь и аксессуары
          обмену и возврату не подлежат
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../api.js'
import {useShopStore} from "@/store/shop";
import {useSessionStore} from "@/store/session";
import Card from "@/components/Card";

export default {
  components: {Card},
  data(){return{
    products:[], title:null, filters:[], afterProducts:"", beforeProducts:"",
    minPrice:"",maxPrice:"",filterData:[]
  }},
  computed:{
    shopStore(){return useShopStore()},
    sessionStore(){return useSessionStore()},
    colorsFilter(){},
    attrFilters(){}
  },
  methods:{
    start(){
      let query,attr,cat,page=1

      if (this.$route.params.categoryId){
        //parent ===0 бежим по всем дочерним
        cat = this.$route.params.categoryId
        //title = cat name
      }
      if (this.$route.params.query){
        query = this.$route.params.query
        this.title = this.$route.params.query
      }
      API.searchProducts(query,attr,cat,page).then(value => {
        if (value.data.success) {
          this.products = value.data.products
          if (value.data.category) {
            this.title = value.data.category.name
            this.afterProducts = value.data.category.afterProducts
            this.beforeProducts = value.data.category.beforeProducts
          }
        }
      })
    },
    handleChildData(data){
      this.filterData.push(data)
    },
    filteringProduct(){

    }
  },
  watch: {
    '$route'(newRoute, oldRoute) {
      if (oldRoute && newRoute !== oldRoute.params) {
        window.scroll(0, 0);
        this.start()
      }
    }
  },
  created() {
   this.start()
  }

}
</script>






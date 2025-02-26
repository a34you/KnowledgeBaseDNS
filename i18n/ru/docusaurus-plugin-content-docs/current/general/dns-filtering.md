---
title: DNS-фильтрация
sidebar_position: 1
---

Чтобы лучше понять DNS-фильтрацию, надо сначала ответить на вопрос «‎Что такое DNS?»

## Что такое DNS?

DNS stands for "Domain Name System", and its purpose is to translate websites' names into something browsers can understand, i.e. IP addresses. Таким образом, каждый раз, когда вы переходите на сайт, ваш браузер посылает запрос на специальный сервер (DNS-сервер). Этот сервер смотрит на имя запрашиваемого домена и отвечает соответствующим IP-адресом. Очень схематично это выглядит так:

![Как работает DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_works_en.png)

Разумеется, всё то же самое применимо не только к браузерами к приложениям, но и к программам, которые посылают какие-либо веб-запросы.

## Как работает DNS-фильтрация?

Когда вы используете одно из приложений AdGuard, поддерживающее DNS-фильтрацию, оно работает как буфер между вашим устройством и DNS-сервером. Все DNS-запросы, которые ваши браузеры или приложения собираются отправить, сначала обрабатываются AdGuard. Если вы используете DNS-сервер, предоставленный по умолчанию вашим интернет-провайдером, ваш DNS-трафик, скорее всего, не зашифрован и уязвим для отслеживания и перехвата. AdGuard зашифрует все ваши DNS-запросы до того, как они будут отправлены, так что никакие злоумышленники не смогут получить доступ к их содержимому. Кроме того, AdGuard может определить запросы к рекламным, трекинговым и «взрослым» сайтам и перенаправить их «‎в никуда» вместо того, чтобы переслать на DNS-сервер. Подробнее об этом мы расскажем [чуть позже](#local-dns-blocklists).

![Как работает DNS-фильтрация](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png)

DNS-фильтрация — это мощный инструмент, который поддерживается всеми основными приложениями AdGuard: [AdGuard для Windows](https://adguard.com/ru/adguard-windows/overview.html), [AdGuard для Mac](https://adguard.com/ru/adguard-mac/overview.html), [AdGuard для Android](https://adguard.com/ru/adguard-android/overview.html) и [AdGuard для iOS](https://adguard.com/ru/adguard-ios/overview.html).

DNS-фильтрация может быть условно разделена на две основные функции: шифрование DNS-трафика и его перенаправление на DNS-сервер, а также блокировка определённых доменов с помощью локальных DNS-фильтров.

### DNS-серверы

В мире существуют тысячи DNS-серверов, и все они уникальны по своим свойствам и целям. Большинство просто возвращает IP-адрес запрошенного домена, но некоторые выполняют дополнительные функции: они блокируют рекламные, трекинговые, «взрослые» домены и т.д. Сегодня все крупные DNS-серверы используют один или несколько надёжных протоколов шифрования DNS-трафика: DNS-over-HTTPS, DNS-over-TLS. AdGuard также предоставляет свой [DNS-сервис](https://adguard-dns.io/ru/welcome.html), и он стал самым первым DNS-провайдером в мире, который добавил поддержку нового и многообещающего протокола шифрования [DNS-over-QUIC](https://adguard.com/ru/blog/dns-over-quic.html). AdGuard располагает несколькими разными серверами для разных целей. Эта диаграмма иллюстрирует работу блокирующих серверов AdGuard:

![AdGuard DNS](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg)

Другие DNS-провайдеры могут работать иначе, так что узнайте все подробности перед тем, как делать выбор в пользу того или иного DNS-сервера. Вы можете найти список некоторых популярных DNS-провайдеров в [этой статье](dns-providers.md). Все приложения AdGuard, которые поддерживают DNS-функционал, также предоставляют на выбор список проверенных DNS-серверов и даже дают возможность вручную указать любой предпочитаемый вами DNS-сервер.

### Локальные DNS-фильтры

Но если полагаться только на DNS-серверы в вопросе фильтрации DNS-трафика, то неизбежны потери в гибкости. Если выбранный сервер блокирует какой-либо домен, вы не сможете на него перейти, пока не переключитесь на другой сервер. С AdGuard же вам даже не обязательно настраивать какой-то конкретный DNS-сервер, чтобы фильтровать DNS-трафик. Все продукты AdGuard позволяют добавлять локальные DNS-фильтры, будь то простые файлы hosts или фильтры, использующие [более сложный DNS-синтаксис](dns-filtering-syntax.md). Они работают сходным образом с обычными рекламными фильтрами: когда DNS-запрос подходит под одно из правил в активном фильтре, он блокируется. А точнее, перенаправляется «в никуда».
> Чтобы получить доступ к DNS-фильтрации в AdGuard для iOS, вам сначала потребуется включить «Расширенный режим» в настройках.

Вы можете добавлять столько собственных DNS-фильтров, сколько захотите. Например, вы можете задействовать [DNS-фильтр AdGuard](https://github.com/AdguardTeam/AdGuardSDNSFilter). Он буквально блокирует всё то же самое, что и сервер AdGuard DNS, но в данном случае вы вольны использовать любой другой DNS-сервер. Плюс, при использовании данного метода вы можете добавить больше фильтров или же создать собственные правила-исключения. Всё это было бы невозможно в случае с использованием только DNS-сервера.
> Существуют сотни различных DNS-фильтров, вы можете выбрать нужные вам [здесь](https://filterlists.com/).

## Сравнение DNS-фильтрации с сетевой фильтрацией

Мы называем сетевой фильтрацией «обычный» способ, которым самостоятельные приложения AdGuard (кроме браузерных расширений) фильтруют весь сетевой трафик, отсюда и название. Освежить знания о сетевой фильтрации можно, прочитав [эту статью](https://kb.adguard.com/ru/general/how-ad-blocking-works).

Во-первых, мы сразу хотим оговориться, что с AdGuard вам не нужно выбирать между ними. Вы всегда можете использовать обычную сетевую фильтрацию и DNS-фильтрацию одновременно. Однако важно понимать разницу между этими двумя подходами. DNS-фильтрация обладает как своими уникальными преимуществами, так и недостатками.

**Плюсы DNS-фильтрации:**

1. On some platforms, this is the only way to achieve system-wide filtering. Например, на iOS только Safari поддерживает блокировку контента в привычном смысле. Фильтровать трафик всех остальных браузеров и приложений поможет только DNS-фильтрация.
2. С некоторыми формами слежки (такими как [CNAME-трекинг](https://adguard.com/ru/blog/cname-tracking.html)) может справиться только DNS-фильтрация.
3. Этап обработки DNS-запроса — самое раннее, когда можно заблокировать рекламу или трекер. Это помогает немного сэкономить время жизни батареи и трафик.

**Недостатки DNS-фильтрации:**

1. DNS-фильтрация — «грубый» метод. Это означает, что с её помощью не получится убрать, например, белые пустые блоки, остающиеся после заблокированной рекламы. Также не получится применить никакие косметические правила. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes).

![Пример разницы](https://cdn.adguard.com/public/Adguard/kb/DNS_filtering/dns_diff.jpg) *Пример разницы между DNS-фильтрацией и сетевой фильтрацией*

2. It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. Это помешает ведению подробной статистики и сделает невозможным создание правил, работающих только для конкретных приложений.

Мы рекомендуем использовать DNS-фильтрацию вместе с сетевой фильтрацией, а не вместо неё, если это возможно.

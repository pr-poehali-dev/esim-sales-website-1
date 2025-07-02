import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const faqData = [
    {
      question: "Что такое eSIM и как она работает?",
      answer:
        "eSIM (встроенная SIM-карта) — это виртуальная SIM-карта, встроенная в ваш телефон. Она работает как обычная SIM, но активируется через QR-код без необходимости вставлять физическую карту. После активации вы мгновенно получаете доступ к мобильному интернету.",
    },
    {
      question: "В каких странах работает eSIM?",
      answer:
        "Наша eSIM работает в Испании и всех 27 странах Европейского Союза: Австрия, Бельгия, Болгария, Хорватия, Кипр, Чехия, Дания, Эстония, Финляндия, Франция, Германия, Греция, Венгрия, Ирландия, Италия, Латвия, Литва, Люксембург, Мальта, Нидерланды, Польша, Португалия, Румыния, Словакия, Словения, Швеция. Также работает в Норвегии, Исландии и Лихтенштейне.",
    },
    {
      question: "Какие устройства поддерживают eSIM?",
      answer:
        "eSIM поддерживают iPhone XR и новее (включая iPhone 11, 12, 13, 14, 15, 16), большинство современных Android-смартфонов Samsung Galaxy S20+, Google Pixel 3+, некоторые модели Huawei, Xiaomi и другие. Для проверки совместимости наберите *#06# — если видите номер EID, ваше устройство поддерживает eSIM.",
    },
    {
      question: "Можно ли создать точку доступа Wi-Fi?",
      answer:
        "Да, вы можете раздавать интернет с eSIM через точку доступа (режим модема) на другие устройства — ноутбуки, планшеты или телефоны друзей. Функция работает в рамках выбранного тарифного плана без дополнительных ограничений.",
    },
    {
      question: "Сколько стоит eSIM и как оплатить?",
      answer:
        "Стоимость зависит от выбранного тарифа — от 300₽ за небольшой пакет интернета до 2000₽ за безлимитные тарифы. Принимаем оплату российскими картами Visa/Mastercard, СБП и другими удобными способами. Оплата в рублях без скрытых комиссий.",
    },
    {
      question: "Что делать, если eSIM не работает?",
      answer:
        "Сначала проверьте, что вы находитесь в зоне покрытия и включили мобильные данные для eSIM линии. Если проблема сохраняется, свяжитесь с нашей поддержкой через чат на сайте или напишите на support@esimspain.ru. Работаем 24/7 и всегда поможем решить проблему.",
    },
    {
      question: "Можно ли перенести eSIM на другой телефон?",
      answer:
        "QR-код для активации eSIM одноразовый и привязывается к конкретному устройству. Перенести eSIM на другой телефон невозможно — придется приобрести новую. Поэтому важно не удалять eSIM профиль с телефона во время поездки.",
    },
    {
      question: "Работает ли eSIM в России?",
      answer:
        "Наша туристическая eSIM предназначена только для использования в Европе и не работает на территории России. В России у вас по-прежнему будет работать ваша основная российская SIM-карта для звонков и SMS.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы о нашем сервисе
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pl-8 text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@esimspain.ru"
              className="inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать в поддержку
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Чат с оператором
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

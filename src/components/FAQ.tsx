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
      question: "В каких странах работает ESIM?",
      answer:
        "ESIM работает в Испании и всех 27 странах Европейского Союза, а также в странах Европейской экономической зоны (Норвегия, Исландия, Лихтенштейн). Полный список стран доступен при оформлении.",
    },
    {
      question: "Как быстро активируется ESIM?",
      answer:
        "ESIM активируется мгновенно после оплаты. Вы получите QR-код на email, который нужно отсканировать на вашем устройстве. Весь процесс занимает не более 2-3 минут.",
    },
    {
      question: "Работают ли звонки и SMS в России?",
      answer:
        "Да! В России у вас будет безлимитный прием звонков и SMS. Исходящие звонки и SMS в пределах России также не ограничены по количеству.",
    },
    {
      question: "Какие устройства поддерживают ESIM?",
      answer:
        "ESIM поддерживают iPhone XR и новее, большинство современных Android-смартфонов Samsung, Google Pixel, некоторые модели Huawei и другие. Проверьте совместимость в настройках вашего устройства.",
    },
    {
      question: "Можно ли оплатить российской картой?",
      answer:
        "Да, мы принимаем оплату российскими картами Visa и Mastercard, выпущенными российскими банками. Также доступна оплата через СБП и другие способы.",
    },
    {
      question: "Что делать, если ESIM не работает?",
      answer:
        "Обратитесь в нашу техподдержку через чат на сайте или напишите на support@esimspain.ru. Мы работаем 24/7 и поможем решить любую проблему или вернем деньги.",
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
                  <div className="flex items-center gap-3">
                    <Icon
                      name="HelpCircle"
                      fallback="CircleAlert"
                      size={20}
                      className="text-orange-500 flex-shrink-0"
                    />
                    <span className="font-medium">{item.question}</span>
                  </div>
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

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Icon name="Smartphone" size={32} className="text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">ESIM Spain</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#constructor"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Конструктор
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              FAQ
            </a>
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Личный кабинет
            </Button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ESIM для путешествий
              <span className="text-orange-500"> по Европе</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мгновенная активация интернета в Испании и всех странах ЕС и ЕЭЗ.
              Оплата в рублях, безлимитные звонки и SMS в России.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <Icon
                  name="Globe"
                  size={24}
                  className="text-orange-500 mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">28 стран ЕС + ЕЭЗ</p>
              </div>
              <div className="text-center p-4">
                <Icon
                  name="Zap"
                  size={24}
                  className="text-orange-500 mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Мгновенная активация</p>
              </div>
              <div className="text-center p-4">
                <Icon
                  name="CreditCard"
                  size={24}
                  className="text-orange-500 mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Оплата в рублях</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              onClick={() =>
                document
                  .getElementById("constructor")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Создать тариф
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-12 shadow-lg flex items-center justify-center">
              <Icon name="Smartphone" size={120} className="text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

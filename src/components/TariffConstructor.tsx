import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TariffConstructor = () => {
  const [dataAmount, setDataAmount] = useState([5]);
  const [callMinutes, setCallMinutes] = useState([120]);
  const [validityDays, setValidityDays] = useState([7]);

  const calculatePrice = () => {
    const basePrice = 15;
    const dataPrice = dataAmount[0] * 3;
    const callPrice = callMinutes[0] * 0.1;
    const daysMultiplier = validityDays[0] / 7;
    return Math.round((basePrice + dataPrice + callPrice) * daysMultiplier);
  };

  const formatDataAmount = (gb: number) => {
    if (gb >= 1) return `${gb}GB`;
    return `${gb * 1000}MB`;
  };

  return (
    <section id="constructor" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Конструктор тарифов
          </h2>
          <p className="text-xl text-gray-600">
            Создайте идеальный тариф для вашего путешествия
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={24} className="text-orange-500" />
                  Настройка тарифа
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-medium text-gray-900">
                      Интернет-трафик
                    </label>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {formatDataAmount(dataAmount[0])}
                    </Badge>
                  </div>
                  <Slider
                    value={dataAmount}
                    onValueChange={setDataAmount}
                    max={50}
                    min={0.5}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>500MB</span>
                    <span>50GB</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-medium text-gray-900">
                      Минуты звонков в ЕС
                    </label>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {callMinutes[0]} мин
                    </Badge>
                  </div>
                  <Slider
                    value={callMinutes}
                    onValueChange={setCallMinutes}
                    max={1000}
                    min={0}
                    step={30}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>0 мин</span>
                    <span>1000 мин</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-medium text-gray-900">
                      Срок действия
                    </label>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {validityDays[0]} дней
                    </Badge>
                  </div>
                  <Slider
                    value={validityDays}
                    onValueChange={setValidityDays}
                    max={30}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1 день</span>
                    <span>30 дней</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-6">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Ваш тариф
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {calculatePrice()}₽
                  </div>
                  <p className="text-gray-600">Итоговая стоимость</p>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Интернет:</span>
                    <span className="font-medium">
                      {formatDataAmount(dataAmount[0])}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Звонки в ЕС:</span>
                    <span className="font-medium">{callMinutes[0]} мин</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Действует:</span>
                    <span className="font-medium">{validityDays[0]} дней</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Звонки/SMS в РФ:</span>
                    <span className="font-medium">Безлимит</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
                  size="lg"
                >
                  Купить за {calculatePrice()}₽
                  <Icon name="ShoppingCart" size={20} className="ml-2" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Мгновенная активация через QR-код
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TariffConstructor;

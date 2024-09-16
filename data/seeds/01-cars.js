// STRETCH
const cars = [
    {
        vin: 'WA1LKAFP1AA007546',
        make: 'toyota',
        model: 'camry',
        mileage: 115000,
        title: 'clean',
        transmisson: 'auto',
    },
    {
        vin: 'JT2BF22K6Y0283641',
        make: 'toyota',
        model: 'highlander',
        mileage: 80000,
        title: 'clean',
        transmisson: 'auto',
    }
]


exports.seed = async function(knex) {
    await knex("cars").truncate()
    await knex("cars").insert(cars)
}